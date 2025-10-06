# `apigeeApiProduct` Submodule <a name="`apigeeApiProduct` Submodule" id="@cdktf/provider-google.apigeeApiProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeApiProduct <a name="ApigeeApiProduct" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product google_apigee_api_product}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProduct(scope: Construct, id: string, config: ApigeeApiProductConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig">ApigeeApiProductConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig">ApigeeApiProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGraphqlOperationGroup">putGraphqlOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGrpcOperationGroup">putGrpcOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putOperationGroup">putOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetApiResources">resetApiResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetApprovalType">resetApprovalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetEnvironments">resetEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetGraphqlOperationGroup">resetGraphqlOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetGrpcOperationGroup">resetGrpcOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetOperationGroup">resetOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetProxies">resetProxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaCounterScope">resetQuotaCounterScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaInterval">resetQuotaInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaTimeUnit">resetQuotaTimeUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetSpace">resetSpace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributes` <a name="putAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putAttributes"></a>

```typescript
public putAttributes(value: IResolvable | ApigeeApiProductAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putAttributes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>[]

---

##### `putGraphqlOperationGroup` <a name="putGraphqlOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGraphqlOperationGroup"></a>

```typescript
public putGraphqlOperationGroup(value: ApigeeApiProductGraphqlOperationGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGraphqlOperationGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a>

---

##### `putGrpcOperationGroup` <a name="putGrpcOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGrpcOperationGroup"></a>

```typescript
public putGrpcOperationGroup(value: ApigeeApiProductGrpcOperationGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGrpcOperationGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a>

---

##### `putOperationGroup` <a name="putOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putOperationGroup"></a>

```typescript
public putOperationGroup(value: ApigeeApiProductOperationGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putOperationGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeApiProductTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a>

---

##### `resetApiResources` <a name="resetApiResources" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetApiResources"></a>

```typescript
public resetApiResources(): void
```

##### `resetApprovalType` <a name="resetApprovalType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetApprovalType"></a>

```typescript
public resetApprovalType(): void
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnvironments` <a name="resetEnvironments" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetEnvironments"></a>

```typescript
public resetEnvironments(): void
```

##### `resetGraphqlOperationGroup` <a name="resetGraphqlOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetGraphqlOperationGroup"></a>

```typescript
public resetGraphqlOperationGroup(): void
```

##### `resetGrpcOperationGroup` <a name="resetGrpcOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetGrpcOperationGroup"></a>

```typescript
public resetGrpcOperationGroup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOperationGroup` <a name="resetOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetOperationGroup"></a>

```typescript
public resetOperationGroup(): void
```

##### `resetProxies` <a name="resetProxies" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetProxies"></a>

```typescript
public resetProxies(): void
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuota"></a>

```typescript
public resetQuota(): void
```

##### `resetQuotaCounterScope` <a name="resetQuotaCounterScope" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaCounterScope"></a>

```typescript
public resetQuotaCounterScope(): void
```

##### `resetQuotaInterval` <a name="resetQuotaInterval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaInterval"></a>

```typescript
public resetQuotaInterval(): void
```

##### `resetQuotaTimeUnit` <a name="resetQuotaTimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaTimeUnit"></a>

```typescript
public resetQuotaTimeUnit(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetSpace` <a name="resetSpace" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetSpace"></a>

```typescript
public resetSpace(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeApiProduct resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isConstruct"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

apigeeApiProduct.ApigeeApiProduct.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformElement"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

apigeeApiProduct.ApigeeApiProduct.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformResource"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

apigeeApiProduct.ApigeeApiProduct.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

apigeeApiProduct.ApigeeApiProduct.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApigeeApiProduct resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeApiProduct to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeApiProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeApiProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList">ApigeeApiProductAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.graphqlOperationGroup">graphqlOperationGroup</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference">ApigeeApiProductGraphqlOperationGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.grpcOperationGroup">grpcOperationGroup</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference">ApigeeApiProductGrpcOperationGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.lastModifiedAt">lastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.operationGroup">operationGroup</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference">ApigeeApiProductOperationGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference">ApigeeApiProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.apiResourcesInput">apiResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.approvalTypeInput">approvalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.attributesInput">attributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.environmentsInput">environmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.graphqlOperationGroupInput">graphqlOperationGroupInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.grpcOperationGroupInput">grpcOperationGroupInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.operationGroupInput">operationGroupInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.proxiesInput">proxiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaCounterScopeInput">quotaCounterScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaInput">quotaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaIntervalInput">quotaIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaTimeUnitInput">quotaTimeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.spaceInput">spaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.apiResources">apiResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.approvalType">approvalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.environments">environments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.proxies">proxies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quota">quota</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaCounterScope">quotaCounterScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaInterval">quotaInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaTimeUnit">quotaTimeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.space">space</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.attributes"></a>

```typescript
public readonly attributes: ApigeeApiProductAttributesList;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList">ApigeeApiProductAttributesList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `graphqlOperationGroup`<sup>Required</sup> <a name="graphqlOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.graphqlOperationGroup"></a>

```typescript
public readonly graphqlOperationGroup: ApigeeApiProductGraphqlOperationGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference">ApigeeApiProductGraphqlOperationGroupOutputReference</a>

---

##### `grpcOperationGroup`<sup>Required</sup> <a name="grpcOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.grpcOperationGroup"></a>

```typescript
public readonly grpcOperationGroup: ApigeeApiProductGrpcOperationGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference">ApigeeApiProductGrpcOperationGroupOutputReference</a>

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.lastModifiedAt"></a>

```typescript
public readonly lastModifiedAt: string;
```

- *Type:* string

---

##### `operationGroup`<sup>Required</sup> <a name="operationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.operationGroup"></a>

```typescript
public readonly operationGroup: ApigeeApiProductOperationGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference">ApigeeApiProductOperationGroupOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeApiProductTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference">ApigeeApiProductTimeoutsOutputReference</a>

---

##### `apiResourcesInput`<sup>Optional</sup> <a name="apiResourcesInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.apiResourcesInput"></a>

```typescript
public readonly apiResourcesInput: string[];
```

- *Type:* string[]

---

##### `approvalTypeInput`<sup>Optional</sup> <a name="approvalTypeInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.approvalTypeInput"></a>

```typescript
public readonly approvalTypeInput: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | ApigeeApiProductAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `environmentsInput`<sup>Optional</sup> <a name="environmentsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.environmentsInput"></a>

```typescript
public readonly environmentsInput: string[];
```

- *Type:* string[]

---

##### `graphqlOperationGroupInput`<sup>Optional</sup> <a name="graphqlOperationGroupInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.graphqlOperationGroupInput"></a>

```typescript
public readonly graphqlOperationGroupInput: ApigeeApiProductGraphqlOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a>

---

##### `grpcOperationGroupInput`<sup>Optional</sup> <a name="grpcOperationGroupInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.grpcOperationGroupInput"></a>

```typescript
public readonly grpcOperationGroupInput: ApigeeApiProductGrpcOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operationGroupInput`<sup>Optional</sup> <a name="operationGroupInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.operationGroupInput"></a>

```typescript
public readonly operationGroupInput: ApigeeApiProductOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a>

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `proxiesInput`<sup>Optional</sup> <a name="proxiesInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.proxiesInput"></a>

```typescript
public readonly proxiesInput: string[];
```

- *Type:* string[]

---

##### `quotaCounterScopeInput`<sup>Optional</sup> <a name="quotaCounterScopeInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaCounterScopeInput"></a>

```typescript
public readonly quotaCounterScopeInput: string;
```

- *Type:* string

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaInput"></a>

```typescript
public readonly quotaInput: string;
```

- *Type:* string

---

##### `quotaIntervalInput`<sup>Optional</sup> <a name="quotaIntervalInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaIntervalInput"></a>

```typescript
public readonly quotaIntervalInput: string;
```

- *Type:* string

---

##### `quotaTimeUnitInput`<sup>Optional</sup> <a name="quotaTimeUnitInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaTimeUnitInput"></a>

```typescript
public readonly quotaTimeUnitInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `spaceInput`<sup>Optional</sup> <a name="spaceInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.spaceInput"></a>

```typescript
public readonly spaceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeApiProductTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a>

---

##### `apiResources`<sup>Required</sup> <a name="apiResources" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.apiResources"></a>

```typescript
public readonly apiResources: string[];
```

- *Type:* string[]

---

##### `approvalType`<sup>Required</sup> <a name="approvalType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.approvalType"></a>

```typescript
public readonly approvalType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.environments"></a>

```typescript
public readonly environments: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `proxies`<sup>Required</sup> <a name="proxies" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.proxies"></a>

```typescript
public readonly proxies: string[];
```

- *Type:* string[]

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quota"></a>

```typescript
public readonly quota: string;
```

- *Type:* string

---

##### `quotaCounterScope`<sup>Required</sup> <a name="quotaCounterScope" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaCounterScope"></a>

```typescript
public readonly quotaCounterScope: string;
```

- *Type:* string

---

##### `quotaInterval`<sup>Required</sup> <a name="quotaInterval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaInterval"></a>

```typescript
public readonly quotaInterval: string;
```

- *Type:* string

---

##### `quotaTimeUnit`<sup>Required</sup> <a name="quotaTimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaTimeUnit"></a>

```typescript
public readonly quotaTimeUnit: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.space"></a>

```typescript
public readonly space: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeApiProductAttributes <a name="ApigeeApiProductAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductAttributes: apigeeApiProduct.ApigeeApiProductAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes.property.name">name</a></code> | <code>string</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes.property.value">value</a></code> | <code>string</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#name ApigeeApiProduct#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#value ApigeeApiProduct#value}

---

### ApigeeApiProductConfig <a name="ApigeeApiProductConfig" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductConfig: apigeeApiProduct.ApigeeApiProductConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.displayName">displayName</a></code> | <code>string</code> | Name displayed in the UI or developer portal to developers registering for API access. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.name">name</a></code> | <code>string</code> | Internal name of the API product. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.orgId">orgId</a></code> | <code>string</code> | The Apigee Organization associated with the Apigee API product, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.apiResources">apiResources</a></code> | <code>string[]</code> | Comma-separated list of API resources to be bundled in the API product. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.approvalType">approvalType</a></code> | <code>string</code> | Flag that specifies how API keys are approved to access the APIs defined by the API product. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.attributes">attributes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>[]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.description">description</a></code> | <code>string</code> | Description of the API product. Include key information about the API product that is not captured by other fields. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.environments">environments</a></code> | <code>string[]</code> | Comma-separated list of environment names to which the API product is bound. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.graphqlOperationGroup">graphqlOperationGroup</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a></code> | graphql_operation_group block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.grpcOperationGroup">grpcOperationGroup</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a></code> | grpc_operation_group block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#id ApigeeApiProduct#id}. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.operationGroup">operationGroup</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a></code> | operation_group block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.proxies">proxies</a></code> | <code>string[]</code> | Comma-separated list of API proxy names to which this API product is bound. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quota">quota</a></code> | <code>string</code> | Number of request messages permitted per app by this API product for the specified quotaInterval and quotaTimeUnit. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaCounterScope">quotaCounterScope</a></code> | <code>string</code> | Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaInterval">quotaInterval</a></code> | <code>string</code> | Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaTimeUnit">quotaTimeUnit</a></code> | <code>string</code> | Time unit defined for the quotaInterval. Valid values include second, minute, hour, day, month or year. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Comma-separated list of OAuth scopes that are validated at runtime. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.space">space</a></code> | <code>string</code> | Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Name displayed in the UI or developer portal to developers registering for API access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#display_name ApigeeApiProduct#display_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Internal name of the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#name ApigeeApiProduct#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Apigee Organization associated with the Apigee API product, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#org_id ApigeeApiProduct#org_id}

---

##### `apiResources`<sup>Optional</sup> <a name="apiResources" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.apiResources"></a>

```typescript
public readonly apiResources: string[];
```

- *Type:* string[]

Comma-separated list of API resources to be bundled in the API product.

By default, the resource paths are mapped from the proxy.pathsuffix variable.
The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the apiResources element is defined to be /forecastrss and the base path defined for the API proxy is /weather, then only requests to /weather/forecastrss are permitted by the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#api_resources ApigeeApiProduct#api_resources}

---

##### `approvalType`<sup>Optional</sup> <a name="approvalType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.approvalType"></a>

```typescript
public readonly approvalType: string;
```

- *Type:* string

Flag that specifies how API keys are approved to access the APIs defined by the API product.

Valid values are 'auto' or 'manual'. Possible values: ["auto", "manual"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#approval_type ApigeeApiProduct#approval_type}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.attributes"></a>

```typescript
public readonly attributes: IResolvable | ApigeeApiProductAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>[]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#attributes ApigeeApiProduct#attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the API product. Include key information about the API product that is not captured by other fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#description ApigeeApiProduct#description}

---

##### `environments`<sup>Optional</sup> <a name="environments" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.environments"></a>

```typescript
public readonly environments: string[];
```

- *Type:* string[]

Comma-separated list of environment names to which the API product is bound.

Requests to environments that are not listed are rejected.
By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#environments ApigeeApiProduct#environments}

---

##### `graphqlOperationGroup`<sup>Optional</sup> <a name="graphqlOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.graphqlOperationGroup"></a>

```typescript
public readonly graphqlOperationGroup: ApigeeApiProductGraphqlOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a>

graphql_operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#graphql_operation_group ApigeeApiProduct#graphql_operation_group}

---

##### `grpcOperationGroup`<sup>Optional</sup> <a name="grpcOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.grpcOperationGroup"></a>

```typescript
public readonly grpcOperationGroup: ApigeeApiProductGrpcOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a>

grpc_operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#grpc_operation_group ApigeeApiProduct#grpc_operation_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#id ApigeeApiProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operationGroup`<sup>Optional</sup> <a name="operationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.operationGroup"></a>

```typescript
public readonly operationGroup: ApigeeApiProductOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a>

operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#operation_group ApigeeApiProduct#operation_group}

---

##### `proxies`<sup>Optional</sup> <a name="proxies" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.proxies"></a>

```typescript
public readonly proxies: string[];
```

- *Type:* string[]

Comma-separated list of API proxy names to which this API product is bound.

By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies.
Apigee rejects requests to API proxies that are not listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#proxies ApigeeApiProduct#proxies}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quota"></a>

```typescript
public readonly quota: string;
```

- *Type:* string

Number of request messages permitted per app by this API product for the specified quotaInterval and quotaTimeUnit.

For example, a quota of 50, for a quotaInterval of 12 and a quotaTimeUnit of hours means 50 requests are allowed every 12 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#quota ApigeeApiProduct#quota}

---

##### `quotaCounterScope`<sup>Optional</sup> <a name="quotaCounterScope" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaCounterScope"></a>

```typescript
public readonly quotaCounterScope: string;
```

- *Type:* string

Scope of the quota decides how the quota counter gets applied and evaluate for quota violation.

If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself. Possible values: ["QUOTA_COUNTER_SCOPE_UNSPECIFIED", "PROXY", "OPERATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#quota_counter_scope ApigeeApiProduct#quota_counter_scope}

---

##### `quotaInterval`<sup>Optional</sup> <a name="quotaInterval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaInterval"></a>

```typescript
public readonly quotaInterval: string;
```

- *Type:* string

Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#quota_interval ApigeeApiProduct#quota_interval}

---

##### `quotaTimeUnit`<sup>Optional</sup> <a name="quotaTimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaTimeUnit"></a>

```typescript
public readonly quotaTimeUnit: string;
```

- *Type:* string

Time unit defined for the quotaInterval. Valid values include second, minute, hour, day, month or year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#quota_time_unit ApigeeApiProduct#quota_time_unit}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Comma-separated list of OAuth scopes that are validated at runtime.

Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#scopes ApigeeApiProduct#scopes}

---

##### `space`<sup>Optional</sup> <a name="space" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.space"></a>

```typescript
public readonly space: string;
```

- *Type:* string

Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#space ApigeeApiProduct#space}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeApiProductTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#timeouts ApigeeApiProduct#timeouts}

---

### ApigeeApiProductGraphqlOperationGroup <a name="ApigeeApiProductGraphqlOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductGraphqlOperationGroup: apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup.property.operationConfigs">operationConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>[]</code> | operation_configs block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup.property.operationConfigType">operationConfigType</a></code> | <code>string</code> | Flag that specifes whether the configuration is for Apigee API proxy or a remote service. |

---

##### `operationConfigs`<sup>Optional</sup> <a name="operationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup.property.operationConfigs"></a>

```typescript
public readonly operationConfigs: IResolvable | ApigeeApiProductGraphqlOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>[]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#operation_configs ApigeeApiProduct#operation_configs}

---

##### `operationConfigType`<sup>Optional</sup> <a name="operationConfigType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup.property.operationConfigType"></a>

```typescript
public readonly operationConfigType: string;
```

- *Type:* string

Flag that specifes whether the configuration is for Apigee API proxy or a remote service.

Valid values include proxy or remoteservice. Defaults to proxy. Set to proxy when Apigee API proxies are associated with the API product. Set to remoteservice when non-Apigee proxies like Istio-Envoy are associated with the API product. Possible values: ["proxy", "remoteservice"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#operation_config_type ApigeeApiProduct#operation_config_type}

---

### ApigeeApiProductGraphqlOperationGroupOperationConfigs <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductGraphqlOperationGroupOperationConfigs: apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.apiSource">apiSource</a></code> | <code>string</code> | Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.attributes">attributes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>[]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.operations">operations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>[]</code> | operations block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a></code> | quota block. |

---

##### `apiSource`<sup>Optional</sup> <a name="apiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.apiSource"></a>

```typescript
public readonly apiSource: string;
```

- *Type:* string

Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#api_source ApigeeApiProduct#api_source}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.attributes"></a>

```typescript
public readonly attributes: IResolvable | ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>[]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#attributes ApigeeApiProduct#attributes}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.operations"></a>

```typescript
public readonly operations: IResolvable | ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>[]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#operations ApigeeApiProduct#operations}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.quota"></a>

```typescript
public readonly quota: ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#quota ApigeeApiProduct#quota}

---

### ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductGraphqlOperationGroupOperationConfigsAttributes: apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.name">name</a></code> | <code>string</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.value">value</a></code> | <code>string</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#name ApigeeApiProduct#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#value ApigeeApiProduct#value}

---

### ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductGraphqlOperationGroupOperationConfigsOperations: apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operation">operation</a></code> | <code>string</code> | GraphQL operation name. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operationTypes">operationTypes</a></code> | <code>string[]</code> | Required. GraphQL operation types. Valid values include query or mutation. Note: Apigee does not currently support subscription types. |

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

GraphQL operation name.

The name and operation type will be used to apply quotas. If no name is specified, the quota will be applied to all GraphQL operations irrespective of their operation names in the payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#operation ApigeeApiProduct#operation}

---

##### `operationTypes`<sup>Optional</sup> <a name="operationTypes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operationTypes"></a>

```typescript
public readonly operationTypes: string[];
```

- *Type:* string[]

Required. GraphQL operation types. Valid values include query or mutation. Note: Apigee does not currently support subscription types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#operation_types ApigeeApiProduct#operation_types}

---

### ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductGraphqlOperationGroupOperationConfigsQuota: apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.interval">interval</a></code> | <code>string</code> | Required. Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.limit">limit</a></code> | <code>string</code> | Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.timeUnit">timeUnit</a></code> | <code>string</code> | Time unit defined for the interval. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#interval ApigeeApiProduct#interval}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.limit"></a>

```typescript
public readonly limit: string;
```

- *Type:* string

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#limit ApigeeApiProduct#limit}

---

##### `timeUnit`<sup>Optional</sup> <a name="timeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#time_unit ApigeeApiProduct#time_unit}

---

### ApigeeApiProductGrpcOperationGroup <a name="ApigeeApiProductGrpcOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductGrpcOperationGroup: apigeeApiProduct.ApigeeApiProductGrpcOperationGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup.property.operationConfigs">operationConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>[]</code> | operation_configs block. |

---

##### `operationConfigs`<sup>Optional</sup> <a name="operationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup.property.operationConfigs"></a>

```typescript
public readonly operationConfigs: IResolvable | ApigeeApiProductGrpcOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>[]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#operation_configs ApigeeApiProduct#operation_configs}

---

### ApigeeApiProductGrpcOperationGroupOperationConfigs <a name="ApigeeApiProductGrpcOperationGroupOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductGrpcOperationGroupOperationConfigs: apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.apiSource">apiSource</a></code> | <code>string</code> | Required. Name of the API proxy with which the gRPC operation and quota are associated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.attributes">attributes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>[]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.methods">methods</a></code> | <code>string[]</code> | List of unqualified gRPC method names for the proxy to which quota will be applied. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.service">service</a></code> | <code>string</code> | Required. |

---

##### `apiSource`<sup>Optional</sup> <a name="apiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.apiSource"></a>

```typescript
public readonly apiSource: string;
```

- *Type:* string

Required. Name of the API proxy with which the gRPC operation and quota are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#api_source ApigeeApiProduct#api_source}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.attributes"></a>

```typescript
public readonly attributes: IResolvable | ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>[]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#attributes ApigeeApiProduct#attributes}

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

List of unqualified gRPC method names for the proxy to which quota will be applied.

If this field is empty, the Quota will apply to all operations on the gRPC service defined on the proxy.

Example: Given a proxy that is configured to serve com.petstore.PetService, the methods com.petstore.PetService.ListPets and com.petstore.PetService.GetPet would be specified here as simply ["ListPets", "GetPet"].

Note: Currently, you can specify only a single GraphQLOperation. Specifying more than one will cause the operation to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#methods ApigeeApiProduct#methods}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.quota"></a>

```typescript
public readonly quota: ApigeeApiProductGrpcOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#quota ApigeeApiProduct#quota}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Required.

gRPC Service name associated to be associated with the API proxy, on which quota rules can be applied upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#service ApigeeApiProduct#service}

---

### ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductGrpcOperationGroupOperationConfigsAttributes: apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.name">name</a></code> | <code>string</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.value">value</a></code> | <code>string</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#name ApigeeApiProduct#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#value ApigeeApiProduct#value}

---

### ApigeeApiProductGrpcOperationGroupOperationConfigsQuota <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductGrpcOperationGroupOperationConfigsQuota: apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.interval">interval</a></code> | <code>string</code> | Required. Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.limit">limit</a></code> | <code>string</code> | Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.timeUnit">timeUnit</a></code> | <code>string</code> | Time unit defined for the interval. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#interval ApigeeApiProduct#interval}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.limit"></a>

```typescript
public readonly limit: string;
```

- *Type:* string

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#limit ApigeeApiProduct#limit}

---

##### `timeUnit`<sup>Optional</sup> <a name="timeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#time_unit ApigeeApiProduct#time_unit}

---

### ApigeeApiProductOperationGroup <a name="ApigeeApiProductOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductOperationGroup: apigeeApiProduct.ApigeeApiProductOperationGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup.property.operationConfigs">operationConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>[]</code> | operation_configs block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup.property.operationConfigType">operationConfigType</a></code> | <code>string</code> | Flag that specifes whether the configuration is for Apigee API proxy or a remote service. |

---

##### `operationConfigs`<sup>Optional</sup> <a name="operationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup.property.operationConfigs"></a>

```typescript
public readonly operationConfigs: IResolvable | ApigeeApiProductOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>[]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#operation_configs ApigeeApiProduct#operation_configs}

---

##### `operationConfigType`<sup>Optional</sup> <a name="operationConfigType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup.property.operationConfigType"></a>

```typescript
public readonly operationConfigType: string;
```

- *Type:* string

Flag that specifes whether the configuration is for Apigee API proxy or a remote service.

Valid values include proxy or remoteservice. Defaults to proxy. Set to proxy when Apigee API proxies are associated with the API product. Set to remoteservice when non-Apigee proxies like Istio-Envoy are associated with the API product. Possible values: ["proxy", "remoteservice"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#operation_config_type ApigeeApiProduct#operation_config_type}

---

### ApigeeApiProductOperationGroupOperationConfigs <a name="ApigeeApiProductOperationGroupOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductOperationGroupOperationConfigs: apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.apiSource">apiSource</a></code> | <code>string</code> | Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.attributes">attributes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>[]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.operations">operations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>[]</code> | operations block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a></code> | quota block. |

---

##### `apiSource`<sup>Optional</sup> <a name="apiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.apiSource"></a>

```typescript
public readonly apiSource: string;
```

- *Type:* string

Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#api_source ApigeeApiProduct#api_source}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.attributes"></a>

```typescript
public readonly attributes: IResolvable | ApigeeApiProductOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>[]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#attributes ApigeeApiProduct#attributes}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.operations"></a>

```typescript
public readonly operations: IResolvable | ApigeeApiProductOperationGroupOperationConfigsOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>[]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#operations ApigeeApiProduct#operations}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.quota"></a>

```typescript
public readonly quota: ApigeeApiProductOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#quota ApigeeApiProduct#quota}

---

### ApigeeApiProductOperationGroupOperationConfigsAttributes <a name="ApigeeApiProductOperationGroupOperationConfigsAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductOperationGroupOperationConfigsAttributes: apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes.property.name">name</a></code> | <code>string</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes.property.value">value</a></code> | <code>string</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#name ApigeeApiProduct#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#value ApigeeApiProduct#value}

---

### ApigeeApiProductOperationGroupOperationConfigsOperations <a name="ApigeeApiProductOperationGroupOperationConfigsOperations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductOperationGroupOperationConfigsOperations: apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations.property.methods">methods</a></code> | <code>string[]</code> | Methods refers to the REST verbs, when none specified, all verb types are allowed. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations.property.resource">resource</a></code> | <code>string</code> | Required. REST resource path associated with the API proxy or remote service. |

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

Methods refers to the REST verbs, when none specified, all verb types are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#methods ApigeeApiProduct#methods}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Required. REST resource path associated with the API proxy or remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#resource ApigeeApiProduct#resource}

---

### ApigeeApiProductOperationGroupOperationConfigsQuota <a name="ApigeeApiProductOperationGroupOperationConfigsQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductOperationGroupOperationConfigsQuota: apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.interval">interval</a></code> | <code>string</code> | Required. Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.limit">limit</a></code> | <code>string</code> | Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.timeUnit">timeUnit</a></code> | <code>string</code> | Time unit defined for the interval. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#interval ApigeeApiProduct#interval}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.limit"></a>

```typescript
public readonly limit: string;
```

- *Type:* string

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#limit ApigeeApiProduct#limit}

---

##### `timeUnit`<sup>Optional</sup> <a name="timeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#time_unit ApigeeApiProduct#time_unit}

---

### ApigeeApiProductTimeouts <a name="ApigeeApiProductTimeouts" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

const apigeeApiProductTimeouts: apigeeApiProduct.ApigeeApiProductTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#create ApigeeApiProduct#create}. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#delete ApigeeApiProduct#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#update ApigeeApiProduct#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#create ApigeeApiProduct#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#delete ApigeeApiProduct#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_api_product#update ApigeeApiProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeApiProductAttributesList <a name="ApigeeApiProductAttributesList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.get"></a>

```typescript
public get(index: number): ApigeeApiProductAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>[]

---


### ApigeeApiProductAttributesOutputReference <a name="ApigeeApiProductAttributesOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.get"></a>

```typescript
public get(index: number): ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>[]

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsList <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.get"></a>

```typescript
public get(index: number): ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductGraphqlOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>[]

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.get"></a>

```typescript
public get(index: number): ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>[]

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperationTypes">resetOperationTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperation` <a name="resetOperation" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperation"></a>

```typescript
public resetOperation(): void
```

##### `resetOperationTypes` <a name="resetOperationTypes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperationTypes"></a>

```typescript
public resetOperationTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypesInput">operationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypes">operationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `operationTypesInput`<sup>Optional</sup> <a name="operationTypesInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypesInput"></a>

```typescript
public readonly operationTypesInput: string[];
```

- *Type:* string[]

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `operationTypes`<sup>Required</sup> <a name="operationTypes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypes"></a>

```typescript
public readonly operationTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetApiSource">resetApiSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetQuota">resetQuota</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putAttributes"></a>

```typescript
public putAttributes(value: IResolvable | ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putAttributes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>[]

---

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putOperations"></a>

```typescript
public putOperations(value: IResolvable | ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putOperations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>[]

---

##### `putQuota` <a name="putQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota"></a>

```typescript
public putQuota(value: ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

---

##### `resetApiSource` <a name="resetApiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetApiSource"></a>

```typescript
public resetApiSource(): void
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetOperations"></a>

```typescript
public resetOperations(): void
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetQuota"></a>

```typescript
public resetQuota(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSourceInput">apiSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributesInput">attributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operationsInput">operationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quotaInput">quotaInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSource">apiSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList</a>

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operations"></a>

```typescript
public readonly operations: ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList</a>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quota"></a>

```typescript
public readonly quota: ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference</a>

---

##### `apiSourceInput`<sup>Optional</sup> <a name="apiSourceInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSourceInput"></a>

```typescript
public readonly apiSourceInput: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>[]

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operationsInput"></a>

```typescript
public readonly operationsInput: IResolvable | ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>[]

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quotaInput"></a>

```typescript
public readonly quotaInput: ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

---

##### `apiSource`<sup>Required</sup> <a name="apiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSource"></a>

```typescript
public readonly apiSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductGraphqlOperationGroupOperationConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit">resetTimeUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetTimeUnit` <a name="resetTimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit"></a>

```typescript
public resetTimeUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limitInput">limitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput">timeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limit">limit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit">timeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: string;
```

- *Type:* string

---

##### `timeUnitInput`<sup>Optional</sup> <a name="timeUnitInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput"></a>

```typescript
public readonly timeUnitInput: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limit"></a>

```typescript
public readonly limit: string;
```

- *Type:* string

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

---


### ApigeeApiProductGraphqlOperationGroupOutputReference <a name="ApigeeApiProductGraphqlOperationGroupOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.putOperationConfigs">putOperationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigs">resetOperationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigType">resetOperationConfigType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperationConfigs` <a name="putOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.putOperationConfigs"></a>

```typescript
public putOperationConfigs(value: IResolvable | ApigeeApiProductGraphqlOperationGroupOperationConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.putOperationConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>[]

---

##### `resetOperationConfigs` <a name="resetOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigs"></a>

```typescript
public resetOperationConfigs(): void
```

##### `resetOperationConfigType` <a name="resetOperationConfigType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigType"></a>

```typescript
public resetOperationConfigType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigs">operationConfigs</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList">ApigeeApiProductGraphqlOperationGroupOperationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigsInput">operationConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigTypeInput">operationConfigTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigType">operationConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationConfigs`<sup>Required</sup> <a name="operationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigs"></a>

```typescript
public readonly operationConfigs: ApigeeApiProductGraphqlOperationGroupOperationConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList">ApigeeApiProductGraphqlOperationGroupOperationConfigsList</a>

---

##### `operationConfigsInput`<sup>Optional</sup> <a name="operationConfigsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigsInput"></a>

```typescript
public readonly operationConfigsInput: IResolvable | ApigeeApiProductGraphqlOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>[]

---

##### `operationConfigTypeInput`<sup>Optional</sup> <a name="operationConfigTypeInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigTypeInput"></a>

```typescript
public readonly operationConfigTypeInput: string;
```

- *Type:* string

---

##### `operationConfigType`<sup>Required</sup> <a name="operationConfigType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigType"></a>

```typescript
public readonly operationConfigType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeApiProductGraphqlOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a>

---


### ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.get"></a>

```typescript
public get(index: number): ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>[]

---


### ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>

---


### ApigeeApiProductGrpcOperationGroupOperationConfigsList <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.get"></a>

```typescript
public get(index: number): ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductGrpcOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>[]

---


### ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetApiSource">resetApiSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetMethods">resetMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putAttributes"></a>

```typescript
public putAttributes(value: IResolvable | ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putAttributes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>[]

---

##### `putQuota` <a name="putQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota"></a>

```typescript
public putQuota(value: ApigeeApiProductGrpcOperationGroupOperationConfigsQuota): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

---

##### `resetApiSource` <a name="resetApiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetApiSource"></a>

```typescript
public resetApiSource(): void
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetMethods` <a name="resetMethods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetMethods"></a>

```typescript
public resetMethods(): void
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetQuota"></a>

```typescript
public resetQuota(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSourceInput">apiSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributesInput">attributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methodsInput">methodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quotaInput">quotaInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSource">apiSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methods">methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList</a>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quota"></a>

```typescript
public readonly quota: ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference</a>

---

##### `apiSourceInput`<sup>Optional</sup> <a name="apiSourceInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSourceInput"></a>

```typescript
public readonly apiSourceInput: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>[]

---

##### `methodsInput`<sup>Optional</sup> <a name="methodsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methodsInput"></a>

```typescript
public readonly methodsInput: string[];
```

- *Type:* string[]

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quotaInput"></a>

```typescript
public readonly quotaInput: ApigeeApiProductGrpcOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `apiSource`<sup>Required</sup> <a name="apiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSource"></a>

```typescript
public readonly apiSource: string;
```

- *Type:* string

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductGrpcOperationGroupOperationConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>

---


### ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit">resetTimeUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetTimeUnit` <a name="resetTimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit"></a>

```typescript
public resetTimeUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limitInput">limitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput">timeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limit">limit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit">timeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: string;
```

- *Type:* string

---

##### `timeUnitInput`<sup>Optional</sup> <a name="timeUnitInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput"></a>

```typescript
public readonly timeUnitInput: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limit"></a>

```typescript
public readonly limit: string;
```

- *Type:* string

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeApiProductGrpcOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

---


### ApigeeApiProductGrpcOperationGroupOutputReference <a name="ApigeeApiProductGrpcOperationGroupOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.putOperationConfigs">putOperationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.resetOperationConfigs">resetOperationConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperationConfigs` <a name="putOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.putOperationConfigs"></a>

```typescript
public putOperationConfigs(value: IResolvable | ApigeeApiProductGrpcOperationGroupOperationConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.putOperationConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>[]

---

##### `resetOperationConfigs` <a name="resetOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.resetOperationConfigs"></a>

```typescript
public resetOperationConfigs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigs">operationConfigs</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList">ApigeeApiProductGrpcOperationGroupOperationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigsInput">operationConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationConfigs`<sup>Required</sup> <a name="operationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigs"></a>

```typescript
public readonly operationConfigs: ApigeeApiProductGrpcOperationGroupOperationConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList">ApigeeApiProductGrpcOperationGroupOperationConfigsList</a>

---

##### `operationConfigsInput`<sup>Optional</sup> <a name="operationConfigsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigsInput"></a>

```typescript
public readonly operationConfigsInput: IResolvable | ApigeeApiProductGrpcOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeApiProductGrpcOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a>

---


### ApigeeApiProductOperationGroupOperationConfigsAttributesList <a name="ApigeeApiProductOperationGroupOperationConfigsAttributesList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.get"></a>

```typescript
public get(index: number): ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>[]

---


### ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference <a name="ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductOperationGroupOperationConfigsAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>

---


### ApigeeApiProductOperationGroupOperationConfigsList <a name="ApigeeApiProductOperationGroupOperationConfigsList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.get"></a>

```typescript
public get(index: number): ApigeeApiProductOperationGroupOperationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>[]

---


### ApigeeApiProductOperationGroupOperationConfigsOperationsList <a name="ApigeeApiProductOperationGroupOperationConfigsOperationsList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.get"></a>

```typescript
public get(index: number): ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductOperationGroupOperationConfigsOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>[]

---


### ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference <a name="ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetMethods">resetMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethods` <a name="resetMethods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetMethods"></a>

```typescript
public resetMethods(): void
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methodsInput">methodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methods">methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `methodsInput`<sup>Optional</sup> <a name="methodsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methodsInput"></a>

```typescript
public readonly methodsInput: string[];
```

- *Type:* string[]

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductOperationGroupOperationConfigsOperations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>

---


### ApigeeApiProductOperationGroupOperationConfigsOutputReference <a name="ApigeeApiProductOperationGroupOperationConfigsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetApiSource">resetApiSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetQuota">resetQuota</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putAttributes"></a>

```typescript
public putAttributes(value: IResolvable | ApigeeApiProductOperationGroupOperationConfigsAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putAttributes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>[]

---

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putOperations"></a>

```typescript
public putOperations(value: IResolvable | ApigeeApiProductOperationGroupOperationConfigsOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putOperations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>[]

---

##### `putQuota` <a name="putQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota"></a>

```typescript
public putQuota(value: ApigeeApiProductOperationGroupOperationConfigsQuota): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a>

---

##### `resetApiSource` <a name="resetApiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetApiSource"></a>

```typescript
public resetApiSource(): void
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetOperations"></a>

```typescript
public resetOperations(): void
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetQuota"></a>

```typescript
public resetQuota(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList">ApigeeApiProductOperationGroupOperationConfigsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList">ApigeeApiProductOperationGroupOperationConfigsOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSourceInput">apiSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributesInput">attributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operationsInput">operationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quotaInput">quotaInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSource">apiSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: ApigeeApiProductOperationGroupOperationConfigsAttributesList;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList">ApigeeApiProductOperationGroupOperationConfigsAttributesList</a>

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operations"></a>

```typescript
public readonly operations: ApigeeApiProductOperationGroupOperationConfigsOperationsList;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList">ApigeeApiProductOperationGroupOperationConfigsOperationsList</a>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quota"></a>

```typescript
public readonly quota: ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference</a>

---

##### `apiSourceInput`<sup>Optional</sup> <a name="apiSourceInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSourceInput"></a>

```typescript
public readonly apiSourceInput: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | ApigeeApiProductOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>[]

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operationsInput"></a>

```typescript
public readonly operationsInput: IResolvable | ApigeeApiProductOperationGroupOperationConfigsOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>[]

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quotaInput"></a>

```typescript
public readonly quotaInput: ApigeeApiProductOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a>

---

##### `apiSource`<sup>Required</sup> <a name="apiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSource"></a>

```typescript
public readonly apiSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductOperationGroupOperationConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>

---


### ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference <a name="ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit">resetTimeUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetTimeUnit` <a name="resetTimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit"></a>

```typescript
public resetTimeUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limitInput">limitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput">timeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limit">limit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit">timeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: string;
```

- *Type:* string

---

##### `timeUnitInput`<sup>Optional</sup> <a name="timeUnitInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput"></a>

```typescript
public readonly timeUnitInput: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limit"></a>

```typescript
public readonly limit: string;
```

- *Type:* string

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeApiProductOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a>

---


### ApigeeApiProductOperationGroupOutputReference <a name="ApigeeApiProductOperationGroupOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.putOperationConfigs">putOperationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resetOperationConfigs">resetOperationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resetOperationConfigType">resetOperationConfigType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperationConfigs` <a name="putOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.putOperationConfigs"></a>

```typescript
public putOperationConfigs(value: IResolvable | ApigeeApiProductOperationGroupOperationConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.putOperationConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>[]

---

##### `resetOperationConfigs` <a name="resetOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resetOperationConfigs"></a>

```typescript
public resetOperationConfigs(): void
```

##### `resetOperationConfigType` <a name="resetOperationConfigType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resetOperationConfigType"></a>

```typescript
public resetOperationConfigType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigs">operationConfigs</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList">ApigeeApiProductOperationGroupOperationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigsInput">operationConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigTypeInput">operationConfigTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigType">operationConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationConfigs`<sup>Required</sup> <a name="operationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigs"></a>

```typescript
public readonly operationConfigs: ApigeeApiProductOperationGroupOperationConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList">ApigeeApiProductOperationGroupOperationConfigsList</a>

---

##### `operationConfigsInput`<sup>Optional</sup> <a name="operationConfigsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigsInput"></a>

```typescript
public readonly operationConfigsInput: IResolvable | ApigeeApiProductOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>[]

---

##### `operationConfigTypeInput`<sup>Optional</sup> <a name="operationConfigTypeInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigTypeInput"></a>

```typescript
public readonly operationConfigTypeInput: string;
```

- *Type:* string

---

##### `operationConfigType`<sup>Required</sup> <a name="operationConfigType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigType"></a>

```typescript
public readonly operationConfigType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeApiProductOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a>

---


### ApigeeApiProductTimeoutsOutputReference <a name="ApigeeApiProductTimeoutsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeApiProduct } from '@cdktf/provider-google'

new apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeApiProductTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a>

---



